/**
 * Audio Generation Script
 * 
 * This script fetches all Tagalog words from lessons.ts and generates audio files
 * using the Google Cloud TTS serverless API. The audio files are saved as MP3 files
 * in the public/audio directory for offline use.
 * 
 * Usage: node scripts/generate-audio.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TTS_API_URL = 'https://tts-server-479744148035.asia-east1.run.app/tts';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'audio');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Sanitize filename - remove special characters and convert to lowercase
 */
function sanitizeFilename(text) {
    return text
        .toLowerCase()
        .replace(/[?!.,;:'"()\/\\]/g, '')
        .replace(/\s+/g, '_')
        .trim();
}

/**
 * Fetch audio from TTS API and save to file
 */
async function generateAudio(text, filename) {
    const filePath = path.join(OUTPUT_DIR, `${filename}.mp3`);

    // Skip if file already exists
    if (fs.existsSync(filePath)) {
        console.log(`⏭️  Skipping (exists): ${filename}`);
        return true;
    }

    try {
        const response = await fetch(TTS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text,
                languageCode: 'fil-PH',
                voiceName: 'fil-PH-Standard-A',
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data.audioContent) {
            // Decode base64 and save to file
            const audioBuffer = Buffer.from(data.audioContent, 'base64');
            fs.writeFileSync(filePath, audioBuffer);
            console.log(`✅ Generated: ${filename} (${text})`);
            return true;
        }
    } catch (error) {
        console.error(`❌ Failed: ${filename} - ${error.message}`);
        return false;
    }
}

/**
 * Parse lessons.ts to extract all Tagalog words
 */
function extractTagalogWords() {
    const lessonsPath = path.join(__dirname, '..', 'src', 'data', 'lessons.ts');
    const content = fs.readFileSync(lessonsPath, 'utf-8');

    const words = new Map(); // Use Map to deduplicate

    // Extract tagalog words from cards
    const tagalogMatches = content.matchAll(/tagalog:\s*['"]([^'"]+)['"]/g);
    for (const match of tagalogMatches) {
        const word = match[1];
        const filename = sanitizeFilename(word);
        if (filename && !words.has(filename)) {
            words.set(filename, word);
        }
    }

    return words;
}

/**
 * Main function
 */
async function main() {
    console.log('🎙️  Tagalog Audio Generator');
    console.log('==========================\n');

    // Extract all Tagalog words
    const words = extractTagalogWords();
    console.log(`📚 Found ${words.size} unique Tagalog words/phrases\n`);

    let success = 0;
    let skipped = 0;
    let failed = 0;

    // Process words one at a time to avoid rate limiting
    for (const [filename, text] of words) {
        const filePath = path.join(OUTPUT_DIR, `${filename}.mp3`);

        if (fs.existsSync(filePath)) {
            skipped++;
            continue;
        }

        const result = await generateAudio(text, filename);
        if (result) {
            success++;
        } else {
            failed++;
        }

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log('\n==========================');
    console.log(`✅ Generated: ${success}`);
    console.log(`⏭️  Skipped: ${skipped}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📁 Output: ${OUTPUT_DIR}`);

    // Generate audio map JSON file for the app to use
    const audioMap = {};
    for (const [filename, text] of words) {
        audioMap[text] = `/audio/${filename}.mp3`;
    }

    const mapPath = path.join(OUTPUT_DIR, 'audio-map.json');
    fs.writeFileSync(mapPath, JSON.stringify(audioMap, null, 2));
    console.log(`\n📋 Audio map saved to: ${mapPath}`);
}

main().catch(console.error);
