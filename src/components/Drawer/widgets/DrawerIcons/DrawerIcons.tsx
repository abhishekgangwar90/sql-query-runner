import { GrResources } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { MdDashboardCustomize } from "react-icons/md";

export default function DrawerIcons({ type }: { type: string }) {
  const commonProps = {
    size: "1.5em",
  };

  switch (type) {
    case "HOME": {
      return <IoHome {...commonProps} />;
    }

    case "RESOURCES": {
      return <GrResources {...commonProps} />;
    }

    case "PRICING": {
      return <ImPriceTags {...commonProps} />;
    }

    case "FEATURES": {
      return <MdDashboardCustomize {...commonProps} />;
    }

    case "DOCUMENTATION": {
      return <FaBook {...commonProps} />;
    }

    default:
      return null;
  }
}
