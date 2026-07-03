import { Router, Request, Response } from "express";

const alojamentosRouter = Router();

alojamentosRouter.get("/alojamentos", (req: Request, res: Response) => {
  res.json([
    {
      id: 1,
      nome: "Hotel Epic Sana",
      imagem: "https://picsum.photos/600/400?1",
      local: "Luanda",
      preco: "45.000 Kz / noite",
      tipo: "Hotel",
      estrelas: 5,
    },
    {
      id: 2,
      nome: "Resort do Mussulo",
      imagem: "https://picsum.photos/600/400?2",
      local: "Ilha do Mussulo",
      preco: "60.000 Kz / noite",
      tipo: "Resort",
      estrelas: 5,
    },
    {
      id: 3,
      nome: "Pensão Central",
      imagem: "https://picsum.photos/600/400?3",
      local: "Benguela",
      preco: "18.000 Kz / noite",
      tipo: "Pensão",
      estrelas: 3,
    },
    {
      id: 4,
      nome: "Hotel Serra da Chela",
      imagem: "https://picsum.photos/600/400?4",
      local: "Huíla",
      preco: "32.000 Kz / noite",
      tipo: "Hotel",
      estrelas: 4,
    },
  ]);
});

export default alojamentosRouter;
