type formatPhoneProps = {
  countryCode?: string;
  phone: string
};

export function formatPhone({ phone, countryCode = "55" }: formatPhoneProps): string {
  if (!phone) return "-";

  if (countryCode && phone.startsWith(countryCode)) {
    phone = phone.slice(countryCode.length);
  }

  phone = phone.replace(/\D/g, "");

  if (phone.length === 11) {
    const ddd = phone.slice(0, 2);
    const part1 = phone.slice(2, 7);
    const part2 = phone.slice(7);
    return `(${ddd}) ${part1}-${part2}`;
  }

  if (phone.length === 10) {
    const ddd = phone.slice(0, 2);
    const part1 = phone.slice(2, 6);
    const part2 = phone.slice(6);
    return `(${ddd}) ${part1}-${part2}`;
  }

  return phone;
}