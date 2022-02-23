import Blockly from "blockly";
import background from "../../assets/icons/Blockly/background.svg";
import character from "../../assets/icons/Blockly/character.svg";
import event from "../../assets/icons/Blockly/event.svg";
import property from "../../assets/icons/Blockly/property.svg";

class CustomCategoryStyle extends Blockly.ToolboxCategory {
  /**
   * Constructor for a custom category.
   * @override
  // //  */
  createIconDom_() {
    const img = document.createElement("img");
    switch (this.name_) {
      case "နောက်ခံ":
        img.src = background;
        break;
      case "ဇာတ်ကောင်":
        img.src = character;
        break;
      case "ဂုဏ်သတ္တိ":
        img.src = property;
        break;
      case "ဖြစ်ရပ်":
        img.src = event;
        break;
      case "World":
        img.src = background;
        break;
      case "Dancer":
        img.src = character;
        break;
      case "Properties":
        img.src = property;
        break;
      case "Events":
        img.src = event;
        break;
      default:
        img.src = "";
    }
    img.alt = this.name_;
    img.width = "30";
    img.height = "30";
    return img;
  }

  setSelected(isSelected) {
    if (isSelected) {
      this.rowDiv_.style.backgroundColor = "#463A49";
    } else {
      this.rowDiv_.style.backgroundColor = "#39293D";
    }

    // This is used for accessibility purposes.
    Blockly.utils.aria.setState(
      /** @type {!Element} */ (this.htmlDiv_),
      Blockly.utils.aria.State.SELECTED,
      isSelected
    );
  }

  addColourBorder_() {
    this.rowDiv_.style.backgroundColor = "transparent";
    this.rowDiv_.style.paddingLeft = "5px";
    this.rowDiv_.style.paddingRight = "5px";
  }
}

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategoryStyle,
  true
);
