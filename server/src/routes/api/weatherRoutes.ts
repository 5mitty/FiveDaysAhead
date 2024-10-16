import { Router, type Request, type Response } from 'express';
import { env } from 'node:process';
const router = Router();

// import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (_req: Request, res: Response) => {
  console.log(res);
  // TODO: GET weather data from city name

  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${env.API_KEY}`) 
  .then(response => {
    return response.json();
  })
  .then(data => {
    res.json([data]);
  })

  // TODO: save city to search history
});

// TODO: GET search history
// router.get('/history', async (req: Request, res: Response) => {

// });

// * BONUS TODO: DELETE city from search history
//router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
