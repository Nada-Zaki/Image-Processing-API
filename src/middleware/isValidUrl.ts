import { Request, Response, NextFunction } from 'express';

export const isValidUrl = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const filename = req.query.filename as string;
  const width = +(req.query.width as string);
  const height = +(req.query.height as string);

  if (
    !filename ||
    !width ||
    !height ||
    typeof width !== 'number' ||
    typeof height !== 'number'
  ) {
    return res
      .status(400)
      .send(
        'invalid url, the url must be http://localhost:3000/api/images?filename=name&width=any-number&height=any-number'
      );
  }
  next();
};
