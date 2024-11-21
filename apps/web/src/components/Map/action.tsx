// mapHandlers.ts
import type { Marker } from 'maplibre-gl';

type HandleCancelProps = {
  formik: any; // Replace with the proper Formik type if available
  marker: Marker | null;
  setMarker: (marker: Marker | null) => void;
  setShowDialog: (value: boolean) => void;
  setCoordinates: (coords: { lng: number | null; lat: number | null } | null) => void;
};


export const handleCancel = ({
  formik,
  marker,
  setMarker,
  setShowDialog,
  setCoordinates,
}: HandleCancelProps) => {
  formik.setFieldValue('longitude', null);
  formik.setFieldValue('latitude', null);
  if (marker !== null) {
    marker.remove();
    setMarker(null);
    setShowDialog(false);
    setCoordinates(null);
  }
};
