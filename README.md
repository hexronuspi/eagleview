`ongoing` 

`v0.1` | `v0.2`(current)


  <p align="left">
  Colab Preview for Code <br>
  <a href="https://colab.research.google.com/drive/1ZklXjCLbrZIACctPS4EKZ4ZnuqdjonO4?usp=sharing" target="_blank">
    <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open in Colab">
  </a>
    
  </p>

Website for eagleview
<br>
[![Package Website](https://img.shields.io/badge/eagleview-Home-blue)](https://hexronus.tech/eagleview/index.html)

# eagleview

A package for greatly increasing the visualisation of datasets, in minimal lines of code.

## Usage
```
It is advised to use `Method 1`, as the github repository is updated from time to time, it may occour that new changes are not still updated.
```
### Method 1
1. Clone the repository:

```bash
!git clone https://github.com/hexronuspi/eagleview
```
2. Upload the folder containing your images. If they are in a zip or any other file, extract them first.

3. Navigate to the cloned repository:

```
%cd eagleview
```

4. Install the package:

```
!pip install .
```

5. Use the package in your Python code:

### Method2

1. using pip install
```bash
!pip install eagleview
```
```python
import eagleview
```

<hr>
Note: 
```python
import os # for file handling
import random # for random function usage
```
### Input:
```python
from eagleview.figshow import ImageMatrix

image_display = ImageMatrix('/content/path_to_folder_containing_images')
```
### Output:
```python
#v0.2
(ImageMatrix('random_uploads/images').rand()).display_image((2,2), print_all=False, display_name=True)
```
```python
# v0.1
(ImageMatrix('random_uploads/images')).display_image((2,2), print_all=False)
```

## Releases: 
- `v0.1`
  - This will display the images in a grid with 3 columns and 2 rows, without printing the left out images. If you want to print all images, you can call `image_display.display_image((2, 3))` or `image_display.display_image((2, 3), True)`.
  
- `v0.2`
  - This will display the name of the images, as their titles. In v0.1, the images were printed starting from first and consecutive until upper bound is reached, this is an optional and random option is added.
