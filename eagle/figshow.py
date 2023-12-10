import os
import matplotlib.pyplot as plt
from PIL import Image

def eagle_figshow(dimensions, folder_path, figsize=figsize, axis=axis):
    a, b = dimensions
    images = os.listdir(folder_path)[:a * b]   
    
    fig, axs = plt.subplots(a, b, figsize=figsize) 
    for i in range(a):
        for j in range(b):
            if i * b + j < len(images):
                img = Image.open(os.path.join(folder_path, images[i * b + j]))
                axs[i, j].imshow(img)
                axs[i, j].axis(axis)  
            else:
                axs[i, j].axis('off')  
    
    plt.tight_layout()
    plt.show()
