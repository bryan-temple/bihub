import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("your_database_name")

    const body = await request.json()

    const result = await db.collection("proposals").insertOne(body)

    return NextResponse.json({ message: 'Proposal submitted successfully', id: result.insertedId })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ message: 'Error submitting proposal' }, { status: 500 })
  }
}