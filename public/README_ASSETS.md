# Assets Directory

This directory contains all visual assets for the CORPROS GROUP website.

## Directory Structure

- `images/` - High-resolution images, photos, and graphics
  - Hero images
  - Section backgrounds
  - Portfolio images
  - Abstract textures

- `videos/` - Video files for backgrounds or content
  - Hero background videos (optional)
  - Promotional videos

- `logos/` - Logo files in various formats
  - `corpros-logo.svg` (recommended)
  - `corpros-logo.png` (fallback)
  - Favicon files

## Recommended Assets

### Logo
- Format: SVG (preferred) or PNG with transparent background
- Colors: Use brand gold (#EFBF04) for logo text/icon
- Size: Multiple sizes for different use cases

### Images
- Format: WebP (preferred) or JPG/PNG
- Style: High-end architectural photography, abstract textures
- Aspect ratios: Maintain consistent ratios for grid layouts

### Videos (Optional)
- Format: MP4 (H.264 codec)
- Resolution: 1080p minimum
- Duration: Keep hero videos under 30 seconds for performance

## Usage in Code

Images can be referenced using Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-background.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority
/>
```


