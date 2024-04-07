import { getProperties } from "@/app/lib/properties";


export async function GET() {
  const Response = await getProperties();
  return Response.json();
}
