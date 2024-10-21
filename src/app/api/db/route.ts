import { NextResponse } from 'next/server';
import { createConnection } from 'mysql2/promise'; // Use your preferred SQL library

export async function GET() {
    const connection = await createConnection({
        host: 'localhost',
        user: 'kujira',
        password: 'Rompo34833aA.',
        database: 'uniwhaledb',
    });

    const [rows] = await connection.execute('SELECT * FROM galleryImages');
    await connection.end();

    return NextResponse.json(rows);
}