class GatlingScript extends Simulation {
  val httpConf = http.baseUrl("http://localhost:3000") // URL do microserviço REST
  val scn = scenario("Test REST API")
    .exec(http("Request")
    .get("/"))
  setUp(
    scn.inject(atOnceUsers(10))
  ).protocols(httpConf)
}