// require app
import app from './configs/app';
const PORT = 3000;

// init app
app.listen(PORT, () => {
  console.log(
    `========================= Server running on port ${PORT} =========================`
  );
});
