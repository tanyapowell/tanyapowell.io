import dbConnect from "utils/dbConnect";
import { Guestbook } from "models";

export default async function handler(req, res) {
  const { method, body } = req;
  const getCollection = {
    guestbook: Guestbook,
  };

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const data = await Guestbook.find({});
        console.log(Guestbook.find({}));
        res.status(200).json({ success: true, data });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    // case "POST":
    //   try {
    //     const data = await getCollection[body.type].create(body.data);
    //     res.status(201).json({ success: true, data });
    //   } catch (error) {
    //     res.status(400).json({ success: false, error });
    //   }
    //   break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
