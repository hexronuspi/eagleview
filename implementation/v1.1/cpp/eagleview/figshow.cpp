// This is incomplete, things are to be added and removed.

#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <cmath>
#include <random>
#include <filesystem>
#include <opencv2/opencv.hpp>

class ImageMatrix {
private:
    std::string folder_path;
    cv::Size figsize;
    std::string axis;
    bool random;

public:
    ImageMatrix(const std::string& folder_path, const cv::Size& figsize = cv::Size(10, 10), const std::string& axis = "off")
        : folder_path(folder_path), figsize(figsize), axis(axis), random(false) {}

    ImageMatrix& rand() {
        random = true;
        return *this;
    }

    void display_image(const cv::Size& grid_dimensions, bool print_all = true, bool display_name = false) {
        int num_columns = grid_dimensions.width;
        std::vector<std::string> images;
        for (const auto& entry : std::filesystem::directory_iterator(folder_path)) {
            images.push_back(entry.path().string());
        }
        int num_images = images.size();
        int num_rows = std::ceil(static_cast<double>(num_images) / num_columns);
        if (!print_all) {
            num_rows = grid_dimensions.height;
        }
        if (random) {
            std::random_device rd;
            std::mt19937 g(rd());
            std::shuffle(images.begin(), images.end(), g);
            num_images = std::min(num_rows * num_columns, num_images);
        }
        cv::Mat canvas(num_rows * figsize.height, num_columns * figsize.width, CV_8UC3, cv::Scalar(255, 255, 255));
        int image_index = 0;
        for (int i = 0; i < num_rows; i++) {
            for (int j = 0; j < num_columns; j++) {
                if (image_index < num_images) {
                    cv::Mat img = cv::imread(images[image_index]);
                    cv::resize(img, img, cv::Size(figsize.width, figsize.height));
                    cv::Rect roi(j * figsize.width, i * figsize.height, figsize.width, figsize.height);
                    img.copyTo(canvas(roi));
                    if (display_name) {
                        cv::putText(canvas, images[image_index], cv::Point(j * figsize.width, i * figsize.height + 20), cv::FONT_HERSHEY_SIMPLEX, 0.5, cv::Scalar(0, 0, 0), 1);
                    }
                    image_index++;
                }
            }
        }
        cv::imshow("Image Matrix", canvas);
        cv::waitKey(0);
    }
};

int main() {
    std::string folder_path = "path/to/folder";
    cv::Size figsize(10, 10);
    std::string axis = "off";
    ImageMatrix image_matrix(folder_path, figsize, axis);
    image_matrix.rand().display_image(cv::Size(3, 3), true, false);
    return 0;
}

