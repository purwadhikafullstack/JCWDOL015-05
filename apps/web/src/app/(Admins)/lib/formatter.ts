export const displayOrderStatus = (status: string) => {
  switch (status) {
    case 'menungguPenjemputanDriver':
      return 'menunggu penjemputan driver';
    case 'laundryMenujuOutlet':
      return 'laundry menuju outlet';
    case 'laundrySampaiOutlet':
      return 'laundry sampai outlet';
    case 'pencucian':
      return 'pencucian';
    case 'penyetrikaan':
      return 'penyetrikaan';
    case 'packing':
      return 'packing';
    case 'menungguPembayaran':
      return 'menunggu pembayaran';
    case 'siapDiantar':
      return 'siap diantar';
    case 'sedangDikirim':
      return 'sedang dikirim';
    case 'selesai':
      return 'selesai';
    default:
      return status;
  }
};
