import { GrResources } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { MdDashboardCustomize } from "react-icons/md";

export default function DrawerIcons({ type }: { type: string }) {
  const commonProps = {
    size: "1.5em",
  };

  const commonStyles = {
    minWidth: "1.5em",
  };

  switch (type) {
    case "HOME": {
      return <IoHome style={commonStyles} {...commonProps} />;
    }

    case "RESOURCES": {
      return <GrResources style={commonStyles} {...commonProps} />;
    }

    case "PRICING": {
      return <ImPriceTags style={commonStyles} {...commonProps} />;
    }

    case "FEATURES": {
      return <MdDashboardCustomize style={commonStyles} {...commonProps} />;
    }

    case "DOCUMENTATION": {
      return <FaBook style={commonStyles} {...commonProps} />;
    }

    default:
      return null;
  }
}
