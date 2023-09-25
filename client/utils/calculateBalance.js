export default function calculateBalance(array) {
  let paid = 0;
  let owed = 0;

  for (const lesson of array) {
    if (lesson.payment_status === 'paid') paid += lesson.price;
    if (lesson.payment_status === 'unpaid') owed += lesson.price;
  }

  return [paid, owed];
}
