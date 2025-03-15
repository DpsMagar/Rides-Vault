#include <stdio.h>
#include <stdlib.h>
#include <mpi.h>

int main(int argc, char** argv) {
    int rank, size;
    int value1, value2, result;

    // Initialize MPI
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank); // Get rank of the current process
    MPI_Comm_size(MPI_COMM_WORLD, &size); // Get total number of processes

    // Ensure two command-line arguments are passed
    if (argc != 3) {
        if (rank == 0) {
            printf("Usage: mpirun -np 2 ./mpi_add <value1> <value2>\n");
        }
        MPI_Finalize();
        return 1;
    }

    // Convert command-line arguments to integers
    value1 = atoi(argv[1]); // First value from the command line
    value2 = atoi(argv[2]); // Second value from the command line

    // Process 0 sends value1 to process 1
    if (rank == 0) {
        MPI_Send(&value1, 1, MPI_INT, 1, 0, MPI_COMM_WORLD);
        printf("Process %d sent value %d\n", rank, value1);
    } else if (rank == 1) {
        // Process 1 receives value1 from process 0
        MPI_Recv(&value1, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        // Add value1 and value2 (received value and command-line input)
        result = value1 + value2;
        printf("Process %d received value %d and added to its own value %d, result = %d\n", rank, value1, value2, result);
    }

    // Finalize MPI
    MPI_Finalize();
    return 0;
}
