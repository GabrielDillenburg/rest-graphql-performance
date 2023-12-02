import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class GatlingScript extends Simulation {

  val httpConf = http.baseUrl("http://localhost:3000") // URL do microserviço REST

  val scn = scenario("Test REST API")
    .exec(
      http("Request")
        .get("/")
    )
    .pause(5) // Pausa de 5 segundos entre as solicitações

  setUp(
    scn.inject(
      atOnceUsers(10), // 10 usuários simulados acessando ao mesmo tempo
      rampUsers(10).during(10.seconds) // Aumento gradual de usuários durante 10 segundos
    ).protocols(httpConf)
  )
}
