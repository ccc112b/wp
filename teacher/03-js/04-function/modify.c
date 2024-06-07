#include <stdio.h>

void modify(int num, int *array) {
  num = num + 1;
  array[0] = array[0] + 1;    
}

int main() {
    int n = 3, array[] = {3,2,1};
    modify(n, array);
    printf("n=%d array[0]=%d\n", n, array[0]);
}