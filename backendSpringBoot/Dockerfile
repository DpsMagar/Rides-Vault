FROM openjdk:21-jdk-slim
WORKDIR /app
COPY target/*.jar ridevault.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "ridevault.jar"]