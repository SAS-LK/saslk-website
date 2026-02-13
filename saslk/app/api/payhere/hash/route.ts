import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { order_id, amount, currency } = body;

        const merchantId = process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID;
        const merchantSecret = process.env.PAYHERE_MERCHANT_SECRET;

        if (!merchantId || !merchantSecret) {
            return NextResponse.json({ error: 'Merchant credentials missing' }, { status: 500 });
        }

        // 1. Hash the secret
        const hashedSecret = crypto
            .createHash('md5')
            .update(merchantSecret)
            .digest('hex')
            .toUpperCase();

        // 2. Format amount to 2 decimal places strictly
        const amountFormatted = parseFloat(amount).toFixed(2);

        // 3. Create the string to hash: merchant_id + order_id + amount + currency + hashed_secret
        // PayHere expects: Merchant ID + Order ID + Amount Formatted + Currency + Hashed Secret
        const hashString = `${merchantId}${order_id}${amountFormatted}${currency}${hashedSecret}`;

        // 4. Generate the final hash
        const hash = crypto
            .createHash('md5')
            .update(hashString)
            .digest('hex')
            .toUpperCase();

        console.log('Server Hash Gen:', {
            merchantId, order_id, amountFormatted, currency, hashedSecret, hashString, hash
        });

        return NextResponse.json({ hash });

    } catch (error) {
        console.error('Hash generation error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
