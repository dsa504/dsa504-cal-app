const styles = {
  root: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 16
  },
  name: {
    margin: 0,
    padding: 0,
    clear: "left",
    fontSize: ({ fullScreen }) => (fullScreen ? 24 : 18),
    lineHeight: ({ fullScreen }) => (fullScreen ? "24px" : "18px")
  },
  description: {
    margin: 0,
    padding: 0,
    paddingTop: 10
  },
  date: {
    fontSize: ({ fullScreen }) => (fullScreen ? 22 : 16),
    lineHeight: ({ fullScreen }) => (fullScreen ? "24px" : "18px"),
    color: "#ec1f27",
    float: ({ fullScreen }) => (fullScreen ? "left" : "none")
  },
  timespan: {
    fontSize: ({ fullScreen }) => (fullScreen ? 18 : 13),
    color: "#797979",
    float: ({ fullScreen }) => (fullScreen ? "right" : "none")
  },
  location: {
    fontStyle: "italic"
  }
};

export default styles;
