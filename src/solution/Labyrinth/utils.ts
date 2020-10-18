export const createMaze = (
  current: HTMLDivElement,
  availableCells: number[][],
  styles: any,
  startingPosition: number[],
  targetPosition: number[]
) => {
  if (current) {
    current.style.gridTemplateRows = `repeat(${availableCells.length}, 1fr)`;
    current.style.gridTemplateColumns = `repeat(${availableCells[0].length}, 1fr)`;
    for (let i = 0; i < availableCells.length; i++) {
      for (let j = 0; j < availableCells[i].length; j++) {
        const cell = document.createElement('span');
        cell.className = styles.cell;
        cell.setAttribute('data-fill', `${availableCells[i][j] === 1}`);
        cell.setAttribute('data-pos', `${[i, j]}`);
        if (startingPosition[0] === i && startingPosition[1] === j) {
          cell.classList.add(styles.start);
        }
        if (targetPosition[0] === i && targetPosition[1] === j) {
          cell.classList.add(styles.target);
        }
        current.appendChild(cell);
      }
    }
    const img = current.querySelector('img');
    const cellEl = current.querySelector(`.${styles.start}`);
    if (img && cellEl) {
      img.style.width = `${cellEl.clientWidth - 10}px`;
      img.style.height = `${cellEl.clientHeight - 10}px`;
    }
  }
};

export const moveCharacter = (current: HTMLDivElement, targetPos: string, targetClass: string) => {
  const img = current.querySelector('img');
  const target = current.querySelector(`[data-pos='${targetPos}']`);
  if (target) {
    const { top, left } = target.getBoundingClientRect();
    img.style.left = `${left}px`;
    img.style.top = `${top}px`;
  }
  return target.classList.contains(targetClass);
};
