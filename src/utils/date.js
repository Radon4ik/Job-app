'use strict';

export function formatDate(dateString) {
  const date = new Date(dateString);
  const dateNumber = date.getDate().toString().padStart(2, '0');
  const monthNumber = (date.getMonth() + 1).toString().padStart(2, '0');
  const yearNumber = date.getFullYear();
  return `${dateNumber}-${monthNumber}-${yearNumber}`;
}
