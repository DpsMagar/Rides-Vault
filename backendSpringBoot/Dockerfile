#FROM openjdk:21-jdk-slim
#WORKDIR /app
#COPY target/*.jar ridevault.jar
#EXPOSE 8080
#
#ENTRYPOINT ["java", "-jar", "ridevault.jar"]
# Step 1: Build the application
FROM maven:3.9.6-eclipse-temurin AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src/ src/
RUN mvn package -DskipTests

# Step 2: Create the runtime image
FROM openjdk:21-jdk-slim AS runtime
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
