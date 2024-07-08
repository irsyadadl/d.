import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui'

export default function InputOtpDemo() {
  return (
    <div>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          {[...Array(6)].map((_, index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}
