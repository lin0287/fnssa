
import React, {Dispatch, SetStateAction} from "react";
import Select from "react-select";

interface AccessibilityOptionsParams {
  setAccessibilityMode: Dispatch<SetStateAction<string>>;
}

export default function AccessibilityOptions(props: AccessibilityOptionsParams) {
  const options = [
    { value: 'dyslexia', label: 'Dyslexia' },
    { value: '', label: 'Normal' }
  ]

  function eventHandler(event: { value: string; }) {
    props.setAccessibilityMode(event.value);
    console.log(event.value);
  }

  return(
    <Select
      options={options}
      placeholder={"Accessibility"}
      // @ts-ignore
      onChange={eventHandler}
    />
  )
}
