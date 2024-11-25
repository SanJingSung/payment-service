import { Controller, Post } from '@nestjs/common';

@Controller('payment')
export class PaymentController {
  @Post('process')
  async processPayment(): Promise<{
    status: 'APPROVED' | 'REJECTED';
    message: string;
  }> {
    // Simula el procesamiento del pago
    if (Math.random() > 0.3) {
      return { status: 'APPROVED', message: 'Payment successful' };
    }
    return { status: 'REJECTED', message: 'Payment failed' };
  }
}
