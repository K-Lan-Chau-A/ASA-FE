import { Card } from '@/components/ui/card'

const GoogleMap = () => {
  return (
    <Card className="overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6099415304414!2d106.69254761476178!3d10.849898760629206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee4ecb5b8e5%3A0x13be3b6babe74be3!2zMTIzIE5ndXnhu4VuIFbEg24gTGluaCwgVMOibiBQaMO6LCBRdeG6rW4gNywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1svi!2s!4v1635000000000!5m2!1svi!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
        title="Bản đồ ASA - Văn phòng chính"
      ></iframe>
    </Card>
  )
}

export default GoogleMap
