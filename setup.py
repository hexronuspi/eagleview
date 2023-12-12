from setuptools import setup, find_packages

setup(
    name='eagleview',
    version='0.1',
    packages=find_packages(),
    install_requires=[
        'matplotlib',
        'Pillow'
    ],
    # Additional metadata
    author='Aditya',
    description='Easy Visualisation of Plots',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url='https://github.com/hexronuspi/eagle/',
)
