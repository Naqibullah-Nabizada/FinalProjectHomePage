"use client";

import { useEffect, useState } from 'react';

import axios from "axios";

import ShamsiDate from "@/components/ShamsiDate";
import moment from "jalali-moment";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { AuthContext } from "../../admin/context/context";

const IncomeReport = () => {

  const date = new Date();
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }

  const { token, admin } = useContext(AuthContext);

  const [incomeCurrentYearReport, setIncomeCurrentYearReport] = useState();
  const [incomeCurrentYearReportAmount, setIncomeCurrentYearReportAmount] = useState();

  const [idCardAmount, setIdCardAmount] = useState();
  const [idCardCost, setIdCardCost] = useState(0);
  const [currentYearIdCardAmount, setcurrentYearIdCardAmount] = useState();
  const [currentYearIdCardCost, setcurrentYearIdCardCost] = useState();

  const [nocturnalFeesAmount, setNocturnalFeesAmount] = useState();
  const [nocturnalFeesCost, setNocturnalFeesCost] = useState();
  const [currentYearNocturnalFeesAmount, setcurrentYearNocturnalFeesAmount] = useState();
  const [currentYearNocturnalFeesCost, setcurrentYearNocturnalFeesCost] = useState();

  const [MAFeesAmount, setMAFeesAmount] = useState();
  const [MAFeesCost, setMAFeesCost] = useState();
  const [currentYearMAFeesAmount, setcurrentYearMAFeesAmount] = useState();
  const [currentYearMAFeesCost, setcurrentYearMAFeesCost] = useState();

  const [EnDeplomaAmount, setEnDeplomaAmount] = useState();
  const [EnDeplomaCost, setEnDeplomaCost] = useState();
  const [currentYearEnDeplomaAmount, setcurrentYearEnDeplomaAmount] = useState();
  const [currentYearEnDeplomaCost, setcurrentYearEnDeplomaCost] = useState();

  const [EnTranscriptAmount, setEnTranscriptAmount] = useState();
  const [EnTranscriptCost, setEnTranscriptCost] = useState(0);
  const [currentYearEnTranscriptAmount, setcurrentYearEnTranscriptAmount] = useState();
  const [currentYearEnTranscriptCost, setcurrentYearEnTranscriptCost] = useState();

  const [NactionalTableAmount, setNactionalTableAmount] = useState();
  const [NactionalTableCost, setNactionalTableCost] = useState();
  const [currentYearNactionalTableAmount, setcurrentYearNactionalTableAmount] = useState();
  const [currentYearNactionalTableCost, setcurrentYearNactionalTableCost] = useState();

  const [BuildingAmount, setBuildingAmount] = useState();
  const [BuildingCost, setBuildingCost] = useState();
  const [currentYearBuildingAmount, setcurrentYearBuildingAmount] = useState();
  const [currentYearBuildingCost, setcurrentYearBuildingCost] = useState();

  const [VehicleAmount, setVehicleAmount] = useState();
  const [VehicleCost, setVehicleCost] = useState();
  const [currentYearVehicleAmount, setcurrentYearVehicleAmount] = useState();
  const [currentYearVehicleCost, setcurrentYearVehicleCost] = useState();

  const [BakeryAmount, setBakeryAmount] = useState();
  const [BakeryCost, setBakeryCost] = useState();
  const [currentYearBakeryAmount, setcurrentYearBakeryAmount] = useState();
  const [currentYearBakeryCost, setcurrentYearBakeryCost] = useState();

  const [BreadAmount, setBreadAmount] = useState();
  const [BreadCost, setBreadCost] = useState();
  const [currentYearBreadAmount, setcurrentYearBreadAmount] = useState();
  const [currentYearBreadCost, setcurrentYearBreadCost] = useState();

  const [FarmProductAmount, setFarmProductAmount] = useState();
  const [FarmProductCost, setFarmProductCost] = useState();
  const [currentYearFarmProductAmount, setcurrentYearFarmProductAmount] = useState();
  const [currentYearFarmProductCost, setcurrentYearFarmProductCost] = useState();

  const [GuaranteedAmount, setGuaranteedAmount] = useState();
  const [GuaranteedCost, setGuaranteedCost] = useState();
  const [currentYearGuaranteedAmount, setcurrentYearGuaranteedAmount] = useState();
  const [currentYearGuaranteedCost, setcurrentYearGuaranteedCost] = useState();

  const [GuestHouseAmount, setGuestHouseAmount] = useState();
  const [GuestHouseCost, setGuestHouseCost] = useState();
  const [currentYearGuestHouseAmount, setcurrentYearGuestHouseAmount] = useState();
  const [currentYearGuestHouseCost, setcurrentYearGuestHouseCost] = useState();

  const [MAFormsAmount, setMAFormsAmount] = useState();
  const [MAFormsCost, setMAFormsCost] = useState();
  const [currentYearMAFormsAmount, setcurrentYearMAFormsAmount] = useState();
  const [currentYearMAFormsCost, setcurrentYearMAFormsCost] = useState();

  const [PaperAmount, setPaperAmount] = useState();
  const [PaperCost, setPaperCost] = useState();
  const [currentYearPaperAmount, setcurrentYearPaperAmount] = useState();
  const [currentYearPaperCost, setcurrentYearPaperCost] = useState();

  const [ResearchFarmAmount, setResearchFarmAmount] = useState();
  const [ResearchFarmCost, setResearchFarmCost] = useState();
  const [currentYearResearchFarmAmount, setcurrentYearResearchFarmAmount] = useState();
  const [currentYearResearchFarmCost, setcurrentYearResearchFarmCost] = useState();

  const [AnimalClinicAmount, setAnimalClinicAmount] = useState();
  const [AnimalClinicCost, setAnimalClinicCost] = useState();
  const [currentYearAnimalClinicAmount, setcurrentYearAnimalClinicAmount] = useState();
  const [currentYearAnimalClinicCost, setcurrentYearAnimalClinicCost] = useState();

  const [KabulBankAmount, setKabulBankAmount] = useState();
  const [KabulBankCost, setKabulBankCost] = useState();
  const [currentYearKabulBankAmount, setcurrentYearKabulBankAmount] = useState();
  const [currentYearKabulBankCost, setcurrentYearKabulBankCost] = useState();

  const [BicycleAmount, setBicycleAmount] = useState();
  const [BicycleCost, setBicycleCost] = useState();
  const [currentYearBicycleAmount, setcurrentYearBicycleAmount] = useState();
  const [currentYearBicycleCost, setcurrentYearBicycleCost] = useState();

  const currentYearIncome = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/income/report');
      setIncomeCurrentYearReport(data);

      let totalIncome = 0;
      data.forEach((items) => {
        items.forEach((item) => {
          if (item.amount) {
            totalIncome += parseFloat(item.amount);
          }
          if (item.cost) {
            totalIncome += parseFloat(item.cost * item.count)
          }
          if (item.fees) {
            totalIncome += parseFloat(item.fees + item.internel_fees)
          }
        });
      });
      setIncomeCurrentYearReport(totalIncome);
    } catch (error) {
      console.log(error);
    }
  };

  const currentYearAmount = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/income/report');
      setIncomeCurrentYearReportAmount(data);

      let count = 0;
      data.forEach((items) => {
        items.forEach((item) => {
          if (item.amount) {
            count++;
          }
          if (item.fees) {
            count++;
          }
          if (item.count) {
            count += item.count
          }
        });
      });
      setIncomeCurrentYearReportAmount(count);
    } catch (error) {
      console.log(error);
    }
  };

  const idCardReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/id-card`);
      setIdCardAmount(data);
      setIdCardCost(data);
      let totalAmount = 0;
      let totalCost = 0;
      let currentYearTotalAmount = 0;
      let currentYearTotalCost = 0;
      data.forEach((item) => {
        if (item.count) {
          totalAmount += parseFloat(item.count);
          if (item.year == moment().format('jYYYY')) {
            currentYearTotalCost += (item.count * item.cost);
            currentYearTotalAmount += item.count;
          }
        }

        setcurrentYearIdCardAmount(currentYearTotalAmount);
        setcurrentYearIdCardCost(currentYearTotalCost);
      });
      data.forEach((item) => {
        if (item.cost) {
          totalCost += parseFloat(item.cost);
        }
      });
      setIdCardAmount(totalAmount);
      setIdCardCost(totalAmount * totalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const NocturnalFeesReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/nocturnal-fees`);
      setNocturnalFeesAmount(data);
      setNocturnalFeesCost(data);
      let totalInternelFees = 0;
      let totalFees = 0;
      let currentYearTotalInternelFees = 0;
      let currentYearTotalFees = 0;
      let currentYearAmount = data.filter(item => item.year == moment().format('jYYYY')).length;

      data.forEach((item) => {
        if (item.internel_fees) {
          totalInternelFees += parseFloat(item.internel_fees);

          if (item.year == moment().format('jYYYY')) {
            currentYearTotalInternelFees += item.internel_fees;
          }
        }
      });

      data.forEach((item) => {
        if (item.fees) {
          totalFees += parseFloat(item.fees);
        }

        if (item.year == moment().format('jYYYY')) {
          currentYearTotalFees += item.fees;
        }
      });

      setNocturnalFeesAmount(data.length);
      setNocturnalFeesCost(totalInternelFees + totalFees);
      setcurrentYearNocturnalFeesAmount(currentYearAmount);
      setcurrentYearNocturnalFeesCost(currentYearTotalInternelFees + currentYearTotalFees);

    } catch (error) {
      console.log(error);
    }
  };

  const MAFeesReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/ma-fees`);
      setMAFeesAmount(data);
      setMAFeesCost(data);
      let totalInternelFees = 0;
      let totalFees = 0;
      let currentYearTotalInternelFees = 0;
      let currentYearTotalFees = 0;
      let currentYearAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.internel_fees) {
          totalInternelFees += parseFloat(item.internel_fees);

          if (item.year == moment().format('jYYYY')) {
            currentYearTotalInternelFees += item.internel_fees;
          }
        }
      });

      data.forEach((item) => {
        if (item.fees) {
          totalFees += parseFloat(item.fees);
        }

        if (item.year == moment().format('jYYYY')) {
          currentYearTotalFees += item.fees;
        }
      });
      setMAFeesAmount(data.length);
      setMAFeesCost(totalInternelFees + totalFees);
      setcurrentYearMAFeesAmount(currentYearAmount)
      setcurrentYearMAFeesCost(currentYearTotalFees + currentYearTotalInternelFees);
    } catch (error) {
      console.log(error);
    }
  };

  const EnDeplomaReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/en-deploma`);
      setEnDeplomaAmount(data);
      setEnDeplomaCost(data);
      let totalInternelFees = 0;
      let totalFees = 0;
      let currentYearTotalInternelFees = 0;
      let currentYearTotalFees = 0;
      let currentYearAmount = data.filter(item => item.year == moment().format('jYYYY')).length;

      data.forEach((item) => {
        if (item.internel_fees) {
          totalInternelFees += parseFloat(item.internel_fees);

          if (item.year == moment().format('jYYYY')) {
            currentYearTotalInternelFees += item.internel_fees;
          }
        }
      });

      data.forEach((item) => {
        if (item.fees) {
          totalFees += parseFloat(item.fees);
        }

        if (item.year == moment().format('jYYYY')) {
          currentYearTotalFees += item.fees;
        }
      });
      setEnDeplomaAmount(data.length);
      setEnDeplomaCost(totalInternelFees + totalFees);
      setcurrentYearEnDeplomaAmount(currentYearAmount);
      setcurrentYearEnDeplomaCost(currentYearTotalFees + currentYearTotalInternelFees);
    } catch (error) {
      console.log(error);
    }
  };

  const EnTranscriptReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/en-transcript`);
      setEnTranscriptAmount(data);
      setEnTranscriptCost(data);
      let totalInternelFees = 0;
      let totalFees = 0;
      let currentYearTotalInternelFees = 0;
      let currentYearTotalFees = 0;
      let currentYearAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.internel_fees) {
          totalInternelFees += parseFloat(item.internel_fees);

          if (item.year == moment().format('jYYYY')) {
            currentYearTotalInternelFees += item.internel_fees;
          }
        }
      });

      data.forEach((item) => {
        if (item.fees) {
          totalFees += parseFloat(item.fees);
        }

        if (item.year == moment().format('jYYYY')) {
          currentYearTotalFees += item.fees;
        }
      });
      setEnTranscriptAmount(data.length);
      setEnTranscriptCost(totalInternelFees + totalFees);
      setcurrentYearEnTranscriptAmount(currentYearAmount);
      setcurrentYearEnTranscriptCost(currentYearTotalFees + currentYearTotalInternelFees);
    } catch (error) {
      console.log(error);
    }
  };

  const NationalTableReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/notional-num`);
      setNactionalTableAmount(data);
      setNactionalTableCost(data);
      let totalInternelFees = 0;
      let totalFees = 0;
      let currentYearTotalInternelFees = 0;
      let currentYearTotalFees = 0;
      let currentYearAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.internel_fees) {
          totalInternelFees += parseFloat(item.internel_fees);

          if (item.year == moment().format('jYYYY')) {
            currentYearTotalInternelFees += item.internel_fees;
          }
        }
      });

      data.forEach((item) => {
        if (item.fees) {
          totalFees += parseFloat(item.fees);
        }

        if (item.year == moment().format('jYYYY')) {
          currentYearTotalFees += item.fees;
        }
      });
      setNactionalTableAmount(data.length);
      setNactionalTableCost(totalInternelFees + totalFees);
      setcurrentYearNactionalTableAmount(currentYearAmount);
      setcurrentYearNactionalTableCost(currentYearTotalFees + currentYearTotalInternelFees);
    } catch (error) {
      console.log(error);
    }
  };

  const BuildingReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/buildings`);
      setBuildingAmount(data);
      setBuildingCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format('jYYYY')) {
          currentYearTotalCost += item.amount;
        }
      });
      setBuildingAmount(data.length);
      setBuildingCost(totalCost);
      setcurrentYearBuildingAmount(currentYearTotalAmount);
      setcurrentYearBuildingCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const VehicleReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/vehicles`);
      setVehicleAmount(data);
      setVehicleCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format('jYYYY')) {
          currentYearTotalCost += item.amount;
        }
      });
      setVehicleAmount(data.length);
      setVehicleCost(totalCost);
      setcurrentYearVehicleAmount(currentYearTotalAmount);
      setcurrentYearVehicleCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const BakeryReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/bakery`);
      setBakeryAmount(data);
      setBakeryCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format("jYYYY")) {
          currentYearTotalCost += item.amount;
        }
      });
      setBakeryAmount(data.length);
      setBakeryCost(totalCost);
      setcurrentYearBakeryAmount(currentYearTotalAmount);
      setcurrentYearBakeryCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const BreadReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/bread`);
      setBreadAmount(data);
      setBreadCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format("jYYYY")) {
          currentYearTotalCost += item.amount;
        }
      });
      setBreadAmount(data.length);
      setBreadCost(totalCost);
      setcurrentYearBreadAmount(currentYearTotalAmount);
      setcurrentYearBreadCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const PaperReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/paper`);
      setPaperAmount(data);
      setPaperCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format("jYYYY")) {
          currentYearTotalCost += item.amount;
        }
      });
      setPaperAmount(data.length);
      setPaperCost(totalCost);
      setcurrentYearPaperAmount(currentYearTotalAmount);
      setcurrentYearPaperCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const MAFormsReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/ma-forms`);
      setMAFormsAmount(data);
      setMAFormsCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format("jYYYY")) {
          currentYearTotalCost += item.amount;
        }
      });
      setMAFormsAmount(data.length);
      setMAFormsCost(totalCost);
      setcurrentYearMAFormsAmount(currentYearTotalAmount);
      setcurrentYearMAFormsCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const GuestHouseReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/guest-house`);
      setGuestHouseAmount(data);
      setGuestHouseCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format("jYYYY")) {
          currentYearTotalCost += item.amount;
        }
      });
      setGuestHouseAmount(data.length);
      setGuestHouseCost(totalCost);
      setcurrentYearGuestHouseAmount(currentYearTotalAmount);
      setcurrentYearGuestHouseCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const ResearchFarmReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/agriculture-farm`);
      setResearchFarmAmount(data);
      setResearchFarmCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format("jYYYY")) {
          currentYearTotalCost += item.amount;
        }
      });
      setResearchFarmAmount(data.length);
      setResearchFarmCost(totalCost);
      setcurrentYearResearchFarmAmount(currentYearTotalAmount);
      setcurrentYearResearchFarmCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const GuaranteedRecursiveReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/guaranteed`);
      setGuaranteedAmount(data);
      setGuaranteedCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format("jYYYY")) {
          currentYearTotalCost += item.amount;
        }
      });
      setGuaranteedAmount(data.length);
      setGuaranteedCost(totalCost);
      setcurrentYearGuaranteedAmount(currentYearTotalAmount);
      setcurrentYearGuaranteedCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const FarmProductsReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/farm-products`);
      setFarmProductAmount(data);
      setFarmProductCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format("jYYYY")) {
          currentYearTotalCost += item.amount;
        }
      });
      setFarmProductAmount(data.length);
      setFarmProductCost(totalCost);
      setcurrentYearFarmProductAmount(currentYearTotalAmount);
      setcurrentYearFarmProductCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const AnimalClinicReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/animal-clinic`);
      setAnimalClinicAmount(data);
      setAnimalClinicCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format("jYYYY")) {
          currentYearTotalCost += item.amount;
        }
      });
      setAnimalClinicAmount(data.length);
      setAnimalClinicCost(totalCost);
      setcurrentYearAnimalClinicAmount(currentYearTotalAmount);
      setcurrentYearAnimalClinicCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const KabulBankReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/kabul-bank`);
      setKabulBankAmount(data);
      setKabulBankCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format("jYYYY")) {
          currentYearTotalCost += item.amount;
        }
      });
      setKabulBankAmount(data.length);
      setKabulBankCost(totalCost);
      setcurrentYearKabulBankAmount(currentYearTotalAmount);
      setcurrentYearKabulBankCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  const BicycleReport = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/income/report/bicycle`);
      setBicycleAmount(data);
      setBicycleCost(data);
      let totalCost = 0;
      let currentYearTotalCost = 0;
      let currentYearTotalAmount = data.filter(item => item.year == moment().format('jYYYY')).length;
      data.forEach((item) => {
        if (item.amount) {
          totalCost += parseFloat(item.amount);
        }
        if (item.year == moment().format("jYYYY")) {
          currentYearTotalCost += item.amount;
        }
      });
      setBicycleAmount(data.length);
      setBicycleCost(totalCost);
      setcurrentYearBicycleAmount(currentYearTotalAmount);
      setcurrentYearBicycleCost(currentYearTotalCost);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    currentYearIncome();
    currentYearAmount();
    idCardReport();
    NocturnalFeesReport();
    MAFeesReport();
    EnDeplomaReport();
    EnTranscriptReport();
    NationalTableReport();
    BuildingReport();
    VehicleReport();
    BakeryReport()
    BreadReport();
    PaperReport();
    MAFormsReport();
    GuestHouseReport();
    ResearchFarmReport()
    GuaranteedRecursiveReport()
    FarmProductsReport();
    AnimalClinicReport();
    KabulBankReport();
    BicycleReport();
  }, []);

  const print = () => {
    window.print();
  }

  return (
    <>
      <div id="navbar">
        <Navbar title={"معاونیت مالی و اداری"} />
        <hr />
      </div>
      {
        token !== null && admin == 0 || admin == 2 ? (
          <section>
            <main className="w-[80%] mx-auto" id="main">
              <header className="flex justify-between my-2">
                <span className="text-center">راپور قطعیه عواید تحصیل شده سال <ShamsiDate /> ریاست پوهنتون کابل</span>
                <span>{date.toLocaleDateString("fa-AF", option)}</span>
              </header>
              <hr />
              <table className="table table-bordered table-sm table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>منابع</th>
                    <th>تعداد سال <ShamsiDate /></th>
                    <th>مجموع سال <ShamsiDate /></th>
                    <th>تعداد کل</th>
                    <th>مجموع کل</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>کارت های هویت محصلین پوهنتون کابل</td>
                    <td>{currentYearIdCardAmount}</td>
                    <td>{currentYearIdCardCost} افغانی</td>
                    <td>{idCardAmount}</td>
                    <td>{idCardCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>فیس محصلین برنامه های شبانه پوهنتون کابل</td>
                    <td>{currentYearNocturnalFeesAmount}</td>
                    <td>{currentYearNocturnalFeesCost} افغانی</td>
                    <td>{nocturnalFeesAmount}</td>
                    <td>{nocturnalFeesCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>فیس محصلین برنامه های ماستری پوهنتون کابل</td>
                    <td>{currentYearMAFeesAmount}</td>
                    <td>{currentYearMAFeesCost} افغانی</td>
                    <td>{MAFeesAmount}</td>
                    <td>{MAFeesCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>دیپلوم زبان انگلیسی پوهنتون کابل</td>
                    <td>{currentYearEnDeplomaAmount}</td>
                    <td>{currentYearEnDeplomaCost} افغانی</td>
                    <td>{EnDeplomaAmount}</td>
                    <td>{EnDeplomaCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>ترانسکریپت زبان انگلیسی پوهنتون کابل</td>
                    <td>{currentYearEnTranscriptAmount}</td>
                    <td>{currentYearEnTranscriptCost} افغانی</td>
                    <td>{EnTranscriptAmount}</td>
                    <td>{EnTranscriptCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>جدول نمرات ملی پوهنتون کابل</td>
                    <td>{currentYearNactionalTableAmount}</td>
                    <td>{currentYearNactionalTableCost} افغانی</td>
                    <td>{NactionalTableAmount}</td>
                    <td>{NactionalTableCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>کرایه اپارتمان های استادان</td>
                    <td>{currentYearBuildingAmount}</td>
                    <td>{currentYearBuildingCost} افغانی</td>
                    <td>{BuildingAmount}</td>
                    <td>{BuildingCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>کارت های وسایط نقلیه</td>
                    <td>{currentYearVehicleAmount}</td>
                    <td>{currentYearVehicleCost} افغانی</td>
                    <td>{VehicleAmount}</td>
                    <td>{VehicleCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>فارم تحقیقاتی پوهنځی زراعت</td>
                    <td>{currentYearResearchFarmAmount}</td>
                    <td>{currentYearResearchFarmCost} افغانی</td>
                    <td>{ResearchFarmAmount}</td>
                    <td>{ResearchFarmCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>کرایه مهمانخانه آمریت خدمات</td>
                    <td>{currentYearGuestHouseAmount}</td>
                    <td>{currentYearGuestHouseCost} افغانی</td>
                    <td>{GuestHouseAmount}</td>
                    <td>{GuestHouseCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>تضمین و بازگشتی</td>
                    <td>{currentYearGuaranteedAmount}</td>
                    <td>{currentYearGuaranteedCost} افغانی</td>
                    <td>{GuaranteedAmount}</td>
                    <td>{GuaranteedCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>فروش ضایعات کاغذ آمریت نشرات</td>
                    <td>{currentYearPaperAmount}</td>
                    <td>{currentYearPaperCost} افغانی</td>
                    <td>{PaperAmount}</td>
                    <td>{PaperCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>فورم های ماستری</td>
                    <td>{currentYearMAFormsAmount}</td>
                    <td>{currentYearMAFormsCost} افغانی</td>
                    <td>{MAFormsAmount}</td>
                    <td>{MAFormsCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>فروش نان قاق لیلیه</td>
                    <td>{currentYearBreadAmount}</td>
                    <td>{currentYearBreadCost} افغانی</td>
                    <td>{BreadAmount}</td>
                    <td>{BreadCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>کرایه خبازی</td>
                    <td>{currentYearBakeryAmount}</td>
                    <td>{currentYearBakeryCost} افغانی</td>
                    <td>{BakeryAmount}</td>
                    <td>{BakeryCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>محصولات تجزیه فارمسوتیکی</td>
                    <td>{currentYearFarmProductAmount}</td>
                    <td>{currentYearFarmProductCost} افغانی</td>
                    <td>{FarmProductAmount}</td>
                    <td>{FarmProductCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>کلینیک حیوانی پوهنځی وترنری</td>
                    <td>{currentYearAnimalClinicAmount}</td>
                    <td>{currentYearAnimalClinicCost} افغانی</td>
                    <td>{AnimalClinicAmount}</td>
                    <td>{AnimalClinicCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>کرایه نمایندگی کابل بانک</td>
                    <td>{currentYearKabulBankAmount}</td>
                    <td>{currentYearKabulBankCost} افغانی</td>
                    <td>{KabulBankAmount}</td>
                    <td>{KabulBankCost} افغانی</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>کرایه بایسکل نگهبانی</td>
                    <td>{currentYearBicycleAmount}</td>
                    <td>{currentYearBicycleCost} افغانی</td>
                    <td>{BicycleAmount}</td>
                    <td>{BicycleCost} افغانی</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <section className="flex justify-around align-items-center bg-gray-300 p-1 my-3">
                <span>عواید سال <ShamsiDate />: {incomeCurrentYearReport} افغانی</span>
                <span>تعداد سال <ShamsiDate />: {incomeCurrentYearReportAmount}</span>
                <span>مجموع عواید: {idCardCost + nocturnalFeesCost + MAFeesCost + EnDeplomaCost + EnTranscriptCost + NactionalTableCost + PaperCost + BreadCost + BakeryCost + MAFormsCost + ResearchFarmCost + GuaranteedCost + GuestHouseCost + FarmProductCost + AnimalClinicCost + KabulBankCost + BicycleCost} افغانی</span>
                <span>تعداد کلی: {idCardAmount + nocturnalFeesAmount + MAFeesAmount + EnDeplomaAmount + EnTranscriptAmount + NactionalTableAmount + PaperAmount + BreadAmount + BakeryAmount + MAFormsAmount + ResearchFarmAmount + GuaranteedAmount + GuestHouseAmount + FarmProductAmount + AnimalClinicAmount + KabulBankAmount + BicycleAmount}</span>
              </section>
              
            </main >
            <div className="flex justify-around align-items-center bg-gray-200 p-1 mb-5">

              <Link href="./finance/reports" className="btn btn-sm btn-outline-secondary flex">
                <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
              </Link>

              <button onClick={print} className="btn btn-sm btn-dark">پرنت</button>
            </div>
          </section>
        ) : (
          <>
            <section className="container col-8 flex justify-center align-items-center">
              <div>
                <p className="alert alert-info text-center">برای وارد شدن به پنل مدیریت ابتدا وارد حساب کاربری خود شوید!</p>
                <Link href="finance/admin/auth" className="block mx-auto btn btn-outline-primary col-6">ورود به پنل مدیریت</Link>
              </div>
              <div>
                <Image src={"/images/finance/register.svg"} alt='register' width={500} height={500} />
              </div>
            </section>
          </>
        )
      }

    </>
  )
}

export default IncomeReport;