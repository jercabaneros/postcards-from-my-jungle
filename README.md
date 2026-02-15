Postcards from My Jungle
GitHub Page:

## Project Description

This project creates a fictional jungle inhabited by AI-generated animals, complete with their sounds and a made-up language called "Aviaran." I trained a diffusion model on an ostrich dataset from HuggingFace (mlnomad/imnet1k_ostrich_Struthio_camelus) to generate 50 unique creature images. The training process took approximately 4 hours on Google Colab with GPU acceleration, using 4,096 training images at 128×128 resolution over 50 epochs. Through experimentation in class, I discovered that fewer epochs (10-15) produced abstract, random-looking outputs that barely resembled recognizable animals. However, by increasing the training duration to 50 epochs, the model learned to generate images with much more discernible animal features—clear body structures, feather-like textures, and organic forms. This longer training allowed the model to capture the nuanced patterns and characteristics of bird anatomy, resulting in creatures that feel believable despite being AI-imagined.

For the soundscapes, I generated four distinct zoo environments using Stable Audio Open, a pre-trained diffusion model. Each sound (ranging from 12-15 seconds) captures different aspects of a lively zoo environment: aviary chatter, mammal enclosures, and bird activity. The sounds automatically crossfade during the slideshow to create an immersive jungle atmosphere. The fictional "Aviaran" language consists of 16 phrases generated using Claude AI, combining onomatopoeia-inspired syllables (like "kraa," "skree," "chit") that mimic bird vocalizations, creating a language that sounds organic to the zoo creature context.

Image quality could be significantly improved by training on higher-resolution images (256×256 or 512×512), using more diverse datasets with multiple animal species, and extending training to 80-100 epochs for even better feature learning. Sound quality could benefit from longer durations (30-60 seconds), more varied prompts capturing specific animal behaviors like feeding or territorial calls, and professional audio post-processing techniques to add spatial depth and environmental reverberation. Despite these potential improvements, the current implementation successfully demonstrates how generative AI can create cohesive, immersive fictional ecosystems.

**Technologies Used:** Python, Diffusers, Stable Audio Open, HTML/CSS/JavaScript

Author: Jerwin Cabaneros
Course: CART 498 - Assignment 05
Date: Winter 2026
