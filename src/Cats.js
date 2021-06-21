import axios from "axios";
import React from "react";
const re = /[-\s]/g;
class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isGet: false,
      catsLife: "",
      catsWeigth: "",
      currentData: [],
    };
  }
  componentDidMount() {
    this.fetchCatData();
  }

  fetchCatData = async () => {
    const url = "https://api.thecatapi.com/v1/breeds";
    try {
      const response = await axios.get(url);
      const data = await response.data;
      this.setState({ data, isGet: true, currentData: data });
      this.countCatLife();
      this.countCatWeight();
    } catch (err) {
      console.log(err);
    }
    console.log(this.state.data);
  };
  countCatLife = () => {
    const { data } = this.state;
    const lifeSpan = data.map((item) => item.life_span);
    const lifeSpanAv = lifeSpan
      .join(" ")
      .split(re)
      .filter((item) => item !== "");

    const catsLife = (
      lifeSpanAv.reduce((sum, item) => +sum + +item) / lifeSpanAv.length
    ).toFixed(2);
    this.setState({ catsLife });
  };
  countCatWeight = () => {
    const { data } = this.state;
    const weigth = data.map((item) => item.weight.metric);

    const weightAv = weigth
      .join(" ")
      .split(re)
      .filter((item) => item !== "");

    const catsWeigth = (
      weightAv.reduce((sum, item) => +sum + +item) / weightAv.length
    ).toFixed(2);
    this.setState({ catsWeigth });
  };
  navCats = (e) => {
    const regexp = /\d+/g;
    const { innerText } = e.target;
    if (e.target.className !== "country-list") {
      this.setState({ currentData: this.state.currentData });
    } else if (innerText === "ALL") {
      this.setState({ currentData: this.state.data });
    } else {
      const country = innerText.slice(0, innerText.search(regexp) - 2);

      this.setState({
        currentData: this.state.data.filter(
          (item) => item.origin.toUpperCase() === country
        ),
      });
    }
  };

  render() {
    return (
      <div>
        <div className="cats">
          <h1>30 Days of React</h1>
          <h3>Cats Paradise</h3>
          <h4>There are {this.state.data.length} cat breeds</h4>
          <div>
            On average a can weight about {this.state.catsWeigth}kg and live {}
            {this.state.catsLife} years.
          </div>
        </div>
        <CountryFilter onClick={this.navCats} data={this.state.data} />
        <ShowCatList data={this.state.currentData} />
      </div>
    );
  }
}
export default Cats;
const ShowCatList = (props) => {
  return props.data.map((item) => (
    <div className="cats-container">
      <div
        style={{
          width: "100%",
          height: item.image === undefined ? 0 : item.image.height,
        }}
        className="cats-image"
      >
        <img
          src={item.image === undefined ? "" : item.image.url}
          loading="lazy"
          alt={item.image === undefined ? "" : item.image.alt}
        />
      </div>
      <div className="cats-description">
        <div>{item.name}</div>
        <div>
          <b>{item.origin}</b>
        </div>
        <div>Temperament:{item.temperament}</div>
        <div>Life Span:{item.life_span} years</div>
        <div className="cats-list">Weight: {item.weight.metric}kg</div>
        <div className="cats-list">Description</div>
        <div className="cats-list">{item.description}</div>
      </div>
    </div>
  ));
};
const CountryFilter = (props) => {
  const country1 = props.data.reduce((total, item) => {
    total[item.origin] = (total[item.origin] || 0) + 1;
    return total;
  }, {});
  const finalButtons = Object.entries(country1).map(([key, value]) => (
    <div className="country-list">
      {key.toUpperCase()} ({value})
    </div>
  ));

  return (
    <div onClick={props.onClick} className="country-cat-container">
      {finalButtons} <div className="country-list">ALL</div>{" "}
    </div>
  );
};
