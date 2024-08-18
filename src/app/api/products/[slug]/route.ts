import { z } from "zod";
import data from "../data.json";
import { NextResponse } from "next/server";

interface RouteParams {
  params: {
    slug: string;
  };
}

export async function GET(_: Request, { params }: RouteParams) {
  const slug = z.string().parse(params.slug);

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return Response.json(
      {
        message: "Product not found",
      },
      { status: 404 }
    );
  }

  return Response.json(product);
}
