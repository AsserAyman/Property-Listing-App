export default function PropertyDetailsPage({
  params,
}: {
  params: { propertyId: string };
}) {
  return <h1>Property Details {params.propertyId}</h1>;
}