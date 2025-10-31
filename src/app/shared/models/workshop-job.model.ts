export interface WorkshopJob {
  orderNo: string;
  jobCardNo: string;
  bookingDate: string;
  deliveryDate: string;
  createdBy: string;
  currentWorker: string;
  status:
    | 'ORDER_RECEIVED'
    | 'MATERIAL_READY'
    | 'IN_PRODUCTION'
    | 'FINALIZING'
    | 'READY_FOR_DELIVERY'
    | 'DELIVERED';
}
