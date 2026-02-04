
import Image from "next/image";


type GeneratorCardProps = {
    gen: {
        title: string;
        power: string;
        pricePerDay: string;
        discount3Days?: string;
        discount7Days?: string;
        model?: string;
        deposit: string;
        fuelType?: string;
        maxPower?: string;
        nominalPower?: string;
        voltage?: string;
        dimensions?: string;
        weight?: string;
        startType?: string;
        tankVolume?: string;
        image?: string;
        fuelConsumption?: {
            "50%"?: string;
            "75%"?: string;
            "100%"?: string;
        };
        capacity?: string;
        connectors?: string;
    };
};

const GeneratorCard = ({ gen }: GeneratorCardProps) => {
    return (
        <div>
            <Image
                src={gen.image ?? "/generators/electric-power-generator.webp"}
                alt={gen.model ?? "Generator preview"}
                width={400}
                height={300}
                priority
            />

            <h3>{gen.model}</h3>
            <p><strong>Потужність:</strong> {gen.power}</p>
            <p><strong>Ціна:</strong> {gen.pricePerDay}</p>
            {gen.discount3Days && <p>від 3-х днів: {gen.discount3Days}</p>}
            {gen.discount7Days && <p>від 7 днів: {gen.discount7Days}</p>}
            <p><strong>Застава:</strong> {gen.deposit}</p>

            <ul>
                {gen.fuelType && <li>Паливо: {gen.fuelType}</li>}
                {gen.maxPower && <li>Максимальна потужність: {gen.maxPower}</li>}
                {gen.nominalPower && <li>Номінальна потужність: {gen.nominalPower}</li>}
                {gen.voltage && <li>{gen.voltage}</li>}
                {gen.dimensions && <li>Габарити: {gen.dimensions}</li>}
                {gen.weight && <li>Маса: {gen.weight}</li>}
                {gen.startType && <li>Тип запуску: {gen.startType}</li>}
                {gen.tankVolume && <li>Обʼєм бака: {gen.tankVolume}</li>}
            </ul>

            {gen.fuelConsumption && (
                <div>
                    <p>Розхід палива:</p>
                    {gen.fuelConsumption["50%"] && <span>50% {gen.fuelConsumption["50%"]}</span>}<br />
                    {gen.fuelConsumption["75%"] && <span>75% {gen.fuelConsumption["75%"]}</span>}<br />
                    {gen.fuelConsumption["100%"] && <span>100% {gen.fuelConsumption["100%"]}</span>}
                </div>
            )}
        </div>
    );
};

export default GeneratorCard;