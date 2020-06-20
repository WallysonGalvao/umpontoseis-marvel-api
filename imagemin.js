const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");

(async () => {
  await imagemin(["chars/*.{jpg,png}"], {
    destination: "images/chars",
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.1, 0.1],
      }),
    ],
  });

  await imagemin(["movies/*.{jpg,png}"], {
    destination: "images/movies",
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.1, 0.1],
      }),
    ],
  });

  console.log(`All images are compressed on "images/" directory`);
})();
