// import { auth } from "@/lib/auth";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { name, image } = await req.json();

//     if (!name || !image) {
//       return NextResponse.json(
//         { error: "Name and image are required" },
//         { status: 400 }
//       );
//     }

   
//     const updatedUser = await auth.api.updateUser({
//       body: {
//         name,
//         image,
//       },
//       headers: req.headers,
//     });

//     return NextResponse.json(updatedUser);
//   } catch (error) {
//     console.error("Update user error:", error);

//     return NextResponse.json(
//       { error: "Failed to update user" },
//       { status: 500 }
//     );
//   }
// }

import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, image } = await req.json();

    // Validate input
    if (!name) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    // 🔥 Get session properly
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 🔥 Correct update (IMPORTANT FIX)
    const updatedUser = await auth.api.updateUser({
      body: {
        userId: session.user.id,
        data: {
          name,
          image,
        },
      },
      headers: req.headers,
    });

    return NextResponse.json({
      success: true,
      user: updatedUser,
    });

  } catch (error) {
    console.error("Update user error:", error);

    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}