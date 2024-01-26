import os
import matplotlib.pyplot as plt
from PIL import Image

class RGBView:
    def __init__(self, path):
        self.path = path

        if os.path.isdir(path):
            # If path is a directory, get all image files in the directory
            self.img_paths = [os.path.join(path, img) for img in os.listdir(path) if os.path.isfile(os.path.join(path, img)) and img.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]
            if not self.img_paths:
                raise ValueError(f"No image files found in {path}.")
        else:
            raise ValueError(f"Invalid path: {path}")

    def _prepare_image(self, img_path):
        img = Image.open(img_path)
        # convert to RGB mode if not already in RGB
        if img.mode == 'L':  # Grayscale
            img = img.convert('RGB')
        elif img.mode == 'RGBA':
            img = img.convert('RGB')
        return img

    def show_rgb(self):
        for img_path in self.img_paths:
            original_img = self._prepare_image(img_path)

            # Display original image
            plt.figure(figsize=(10, 5))
            plt.subplot(1, 4, 1)
            plt.imshow(original_img)
            plt.title(f'Original - {os.path.basename(img_path)}')
            plt.axis('off')

            # Display RGB channels
            r, g, b = original_img.split()
            plt.subplot(1, 4, 2)
            plt.imshow(r, cmap='Reds')
            plt.title('Red Channel')
            plt.axis('off')

            plt.subplot(1, 4, 3)
            plt.imshow(g, cmap='Greens')
            plt.title('Green Channel')
            plt.axis('off')

            plt.subplot(1, 4, 4)
            plt.imshow(b, cmap='Blues')
            plt.title('Blue Channel')
            plt.axis('off')

            plt.tight_layout()
            plt.show()
