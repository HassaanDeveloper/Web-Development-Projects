// import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
  // const url = request.nextUrl;
  // const name = url.searchParams.get("name");
  // const age = url.searchParams.get("age");
  // const query = url.searchParams.has("name");

  // if (query) {
  //   return new NextResponse("Hello Brother!");
  // }

  // if (age == "22") {
  //   return new NextResponse(`Hello ${name}`);
  // }

  // return NextResponse.json({ url, name, age, query });
// }

// export async function POST(request: NextRequest) {
  // const { name, age, _id } = await request.json();
  // return new NextResponse(`Hello ${name}. Your age is ${age}. And your id is ${_id}.`);
  // return NextResponse.json({ name, age, _id });
// }