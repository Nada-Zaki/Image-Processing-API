import { Request, Response, NextFunction } from 'express';

export const isValidUrl = (req: Request, res: Response, next: NextFunction) => {
  const filename = (req.query.filename as string) ?? null;
  const width = (parseInt(req.query.width as string) as number) ?? null;
  const height = (parseInt(req.query.height as string) as number) ?? null;

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
