import HeaderMain from "../components/header/HeaderMain";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Banner from "../components/Bottom-banner";

// affiliate link
//https://fa0d97xm6mbdlx3doazh4dkbw6.hop.clickbank.net

export default function Home() {
  return (
    <div className="w-full">
      <HeaderMain />
      <div className="w-9/12 mt-4 mx-auto">
        <Table>
          <TableCaption>Pick your converter.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-[#9177F2]">
                Converter
              </TableHead>
              <TableHead className="text-[#9177F2]">Units</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-[#46A66F]">
                <Link href="/length">Length</Link>
              </TableCell>
              <TableCell className="text-[#9177F2]">
                - miles in meters, inches in centimeters, miles in kilometers,
                ...
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[#46A66F]">
                <Link href="/mass">Mass</Link>
              </TableCell>
              <TableCell className="text-[#9177F2]">
                - how many kilograms are in a pound, how many carats are in a
                carat, how many ounces are in...
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[#46A66F]">
                <Link href="/pressure">Pressure</Link>
              </TableCell>
              <TableCell className="text-[#9177F2]">
                - atmospheres in pascals, pascals in mmHg, ...
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[#46A66F]">
                <Link href="/time">Time</Link>
              </TableCell>
              <TableCell className="text-[#9177F2]">
                - how many seconds are in an hour, how many quarters of an hour
                are in a day, ...
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[#46A66F]">
                <Link href="/energy">Energy</Link>
              </TableCell>
              <TableCell className="text-[#9177F2]">
                - calories to joules, joules to calories, energy unit
                conversion, 1 BTU to ...
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[#46A66F]">
                <Link href="/power">Power</Link>
              </TableCell>
              <TableCell className="text-[#9177F2]">
                - watts in calories per second, BTU in kilowatts, kW in HP, ...
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[#46A66F]">
                <Link href="/volume">Volume</Link>
              </TableCell>
              <TableCell className="text-[#9177F2]">
                - how many liters is a gallon, gallons to liters, 1 ounce is ...
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[#46A66F]">
                <Link href="/surface">Surface</Link>
              </TableCell>
              <TableCell className="text-[#9177F2]">
                - ares are how many meters, hectare ares hectare, conversion of
                ares to hectares...
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[#46A66F]">
                <Link href="/speed">Speed</Link>
              </TableCell>
              <TableCell className="text-[#9177F2]">
                - mph to km/h, 1 mph to ...,
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell className="font-medium text-[#46A66F]">
                <Link href="/speed">Currency Converter</Link>
              </TableCell>
              <TableCell className="text-[#9177F2]">
                - USD, EURO, YUAN...
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </div>
      <Banner />
    </div>
  );
}
