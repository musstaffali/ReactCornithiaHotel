import React, { Component } from "react";
import { FaFish, FaCity, FaShip, FaWifi, FaAppleAlt} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaFish />,
        title: "Fresh caught seafood from the Nile.",
        info:
          "Fresh wild lobsters and fish caught every morning and evening by deepsea divers and fisherman on the outskirts of the city and shipped to our kitchen twice a day."
      },
      {
        icon: <FaCity />,
        title: "Tour guide",
        info:
          "We offer group tour guides or executive luxury private tours for our highend guests."
      },
      {
        icon: <FaShip />,
        title: "Free unlimited boat rides on the Nile. ",
        info:
          "If your ever by Nile street come stop by Cornithias very own floating restaurants by the Nile providing free rides to our guests."
      },
      {
        icon: <FaAppleAlt />,
        title: "Fresh picked Fruits & dates",
        info:
          "Fresh grown fruits and vegetables grown at our own garden."
      },
      {
        icon: <FaWifi />,
        title: "Free Wifi",
        info:
          "Complimentary free 5g Wi-Fi for our guests."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
