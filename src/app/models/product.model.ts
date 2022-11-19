import { NonNullableFormBuilder } from "@angular/forms";

export interface Product
{
  id: string;
  title: string;
  price: Number;
  image: string;
  description: string;
  category: string;
}
