from setuptools import setup, find_packages

setup(
    name='eagleview',
    version='1.2',
    packages=find_packages(),
    install_requires=[
        'matplotlib',
        'Pillow',
        'pandas'
    ],
    # Additional metadata
    author='Aditya',
    description='Easy Visualisation of Plots',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url='https://github.com/hexronuspi/eagle/',
)
