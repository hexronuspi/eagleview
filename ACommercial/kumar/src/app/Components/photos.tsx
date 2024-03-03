const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const localLink = (id: string, width: number, height: number) =>
  `/Gallery/${id}.jpg`;

const localPhotos = [
    { id: '01', width: 3, height: 2 },
    { id: '02', width: 1, height: 1 },
    { id: '03', width: 3, height: 4 },
    { id: '04', width: 2, height: 3 },
    { id: '05', width: 2, height: 3 },
    { id: '06', width: 3, height: 4 },
    { id: '07', width: 2, height: 2 },
    { id: '08', width: 3, height: 2 },
];

const photos = localPhotos.map((photo) => ({
  src: localLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: localLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;